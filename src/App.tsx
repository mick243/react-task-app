import { useState } from 'react'
import { appContainer, board, buttons, deleteBoardButton, loggerButton } from './App.css'
import BoardList from './components/BoardList/BoardList'
import ListsContainer from './components/ListsContainer/ListsContainer';
import { useTypedDispatch, useTypedSelector } from './hooks/redux';
import EditModal from './components/EditModal/EditModal';
import LoggerModal from './components/LoggerModal/LoggerModal';
import { deleteBoard, sort } from './store/slices/boardSlice';
import { addLog } from './store/slices/loggerSlice';
import { v4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  const dispatch = useTypedDispatch();
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const modalActive = useTypedSelector(state => state.boards.modalActive);

  const boards = useTypedSelector(state => state.boards.boardArray)
  //특정 객체만 가져온다.
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0]; //클릭할때 마다 바뀌는값

  const lists = getActiveBoard.lists;

  const handleDeleteBoard = () => {
    if(boards.length > 1) {
      dispatch(
        deleteBoard({boardId: getActiveBoard.boardId})
      )
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `게시판 지우기: ${getActiveBoard.boardName}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now())
        })
      )

      //activeBoardId를 넘겨준다
      const newIndexToSet = () => {
        const indexToBeDeleted = boards.findIndex(
          board => board.boardId === activeBoardId
        )
        return indexToBeDeleted === 0
        ? indexToBeDeleted + 1
        : indexToBeDeleted - 1;
      }
      //newIndexToSet의 boardId를 ActiveBoardId에 셋팅한다.
      setActiveBoardId(boards[newIndexToSet()].boardId)
    } else {
      alert('최소 게시판의 개수는 1개입니다.')
    }
  }

  const handleDragEnd = (result: any) => {
    console.log(result);
    const {destination, source, draggableId} = result;
    
    console.log('lists', lists)
    const sourceList = lists.filter(
      list => list.listId === source.droppableId
    )[0];

    console.log('source list', sourceList);
      dispatch(
        sort({
          boardIndex: boards.findIndex(board => board.boardId == activeBoardId),
          droppableIdStart: source.droppableId,
          droppableIdEnd: destination.droppableId,
          droppableIndexStart: source.index,
          droppableIndexEnd: destination.index,
          draggableId
        })
      )

      dispatch(
        addLog({
          logId: v4(),
          logMessage: `
          리스트 "${sourceList.listName}" 에서
          리스트 "${lists.filter(list => list.listId === destination.droppableId)[0].listName}으로
          ${sourceList.tasks.filter(task => task.taskId === draggableId)[0].taskName}을 옮겼습니다.
          `,
          logAuthor: 'User',
          logTimestamp: String(Date.now())
        })
      )
  }

  return (
    <div className={appContainer}>

      {isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
      {modalActive ? <EditModal /> : null}

      <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>
      <div className={board}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <ListsContainer lists = {lists} boardId = {getActiveBoard.boardId}/>
      </DragDropContext>
      </div>
      <div className={buttons}>
        <button className={deleteBoardButton} onClick={handleDeleteBoard}>
          이 게시판 삭제하기
        </button>
        <button className={loggerButton} onClick={() => setIsLoggerOpen(!isLoggerOpen)}>
          {isLoggerOpen ? "활동 목록 숨기기" : "활동 목록 보이기"}
        </button>
      </div>
    </div>
  )
}

export default App
