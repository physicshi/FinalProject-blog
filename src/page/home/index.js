import { CommitStat, ArticleList,Calendar } from './component';

function Home() {
  return (
    <div className="home">
      <CommitStat />
      <Calendar/>
      <ArticleList />
    </div>
  );
}

export default Home;
