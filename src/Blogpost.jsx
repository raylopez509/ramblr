import './Blogpost.css'

function Blogpost({title, content, tags, date_created}) {

  function formatDate(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleString('en-US');
  }

  return ( 
    <div className="post">
      <section className='postHeader'>
        <h1>{title}</h1>
      </section>
      <section className='postContent'>
        <p>{content}</p>
      </section>
      <section className='postFooter'>
        <div className='tagContainer'>
          {
            tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))
          }
        </div>
        <p>{formatDate(date_created)}</p>   
      </section>
    </div>
  );
}

export default Blogpost;