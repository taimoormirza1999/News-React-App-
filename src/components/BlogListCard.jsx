
import Card from "./Card";
export default function BlogListCard(props) {
  
  return (
    props.filteredData.map((blog, index) => (
    <a target="_blank" href={`${blog.url}`} key={blog.id}>     
      <Card urlToImage={blog.urlToImage} publishedAt={blog.publishedAt} title={blog.title} description={blog.description} id={index} />

     </a>
     ))
  );
}
