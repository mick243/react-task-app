import { useState } from 'react'
import { appContainer, board, buttons } from './App.css'
import BoardList from './components/BoardList/BoardList'
import ListsContainer from './components/ListsContainer/ListsContainer';
import { useTypedSelector } from './hooks/redux';

function App() {

  const[activeBoardId, setActiveBoardId] = useState('board-0');

  const boards = useTypedSelector(state => state.boards.boardArray)
  //특정 객체만 가져온다.
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0]; //클릭할때 마다 바뀌는값

  const lists = getActiveBoard.lists;
  return (
    <div className={appContainer}>
      <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>
      <div className={board}>
        <ListsContainer lists = {lists} boardId = {getActiveBoard.boardId}/>
      </div>
      <div>
        <button className={buttons}>
        </button>
        <button>
          
        </button>
      </div>
    </div>
  )
}

export default App
