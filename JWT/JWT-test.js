router.post(
    '/login', 
    [
        body('users_email').notEmpty().isEmail().withMessage('이메일 확인필요'),
        body('users_pwd').notEmpty().isString().withMessage('비밀번호 확인 필요'),
        validate
    ]
    ,function(req, res){
        const {users_email, users_pwd} = req.body

        let sql = `SELECT * FROM users WHERE users_email = ?`

        connection.query(sql, users_email,
            function (err, results) {
                if(err){
                    console.log(err)
                    return res.status(400).end()
                }
                
                var loginUser = results[0] //users_email이 DB에 저장된 회원인지 확인

                if(loginUser && loginUser.users_pwd == users_pwd) {
                    //token 발급
                        const token = jwt.sign({
                            email : loginUser.email, 
                            name : loginUser.name
                        }, process.env.PRIVATE_KEY, {
                            expiresIn : '30m',
                            issuer : 'Me'
                        });

                        res.cookie('token', token,{
                            httpOnly : true
                        })

                        console.log(token);

                        res.status(200).json({
                        message : `${loginUser.users_name}님 로그인 되었습니다.`,
                        })
                    } else {
                    res.status(403).json({
                        message : "email또는 pwd가 틀렸습니다."
                    })
                }
            }
        )
    })
