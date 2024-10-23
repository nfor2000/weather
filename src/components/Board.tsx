import BoardAnalytics from "./BoardAnalytics";
import BoardHeader from "./BoardHeader";
import BoardMain from "./BoardMain";

const Board = () => {
     return (
          <section className="flex-1 shrink">
               <BoardHeader />
               <BoardMain />
               <BoardAnalytics />
          </section>
     );
};

export default Board;
