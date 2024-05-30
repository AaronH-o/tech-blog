
const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('nice!');
  const title = document.querySelector('.post-input-title').value.trim();
  const content = document.querySelector('.post-input-text').value.trim();

  if(title && content) {
    try{
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
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
  .querySelector('.new-post-form')
  .addEventListener('submit',
    newFormHandler);