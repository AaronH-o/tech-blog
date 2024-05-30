
const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('nice!');
  const content = document.querySelector('.comment-input-text').value.trim();
  const blogpost_id = document.querySelector('.post-title').id;

  console.log(blogpost_id);

  if(blogpost_id && content) {
    try{
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ blogpost_id, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok) {
        const data = await response.json();
        console.log(data);
        document.location.reload();
      } else {
        alert('Failed to create post');
      }
    } catch(err) {
      console.error(err);
    }
  }
}


document
  .querySelector('.new-comment-form')
  .addEventListener('submit',
    newFormHandler);