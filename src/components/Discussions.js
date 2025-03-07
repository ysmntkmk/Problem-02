import Discussion from './Discussion';

export default function Discussions() {
  // Mock veri seti
  const discussions = [
    { id: 1, title: "Tartışma konusu = 1 / ", author: "Namık Korona", timeAgo: "2 gün önce" },
    { id: 2, title: "Tartışma konusu = 2 / ", author: "Ahmet Yıldız", timeAgo: "5 gün önce" },
  ];

  return (
    <ul className='discussions'>
      {discussions.map((discussion) => (
        <Discussion
          key={discussion.id}
          title={discussion.title}
          author={discussion.author}
          timeAgo={discussion.timeAgo}
        />
      ))}
    </ul>
  );
}