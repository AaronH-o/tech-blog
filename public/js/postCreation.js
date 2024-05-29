
const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('nice!');
  const title = document.querySelector('.post-input-title').value.trim();
  const text = document.querySelector('.post-input-text').value.trim();

  if(title && text) {
    try{
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok) {
        const data = await response.json();
        console.log(data);
        document.location.replace('/');
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