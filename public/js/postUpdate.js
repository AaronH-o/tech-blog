const post_id = document.querySelector('.post-input-title').id;
console.log(post_id)


const updateFormHandler = async (event) => {
  event.preventDefault();
  console.log('nice!');
  const title = document.querySelector('.post-input-title').value.trim();
  const content = document.querySelector('.post-input-text').value.trim();

  const post_id = document.querySelector('.post-input-title').id;
  

  if(title && content) {
    try{
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok) {
        const data = await response.json();
        console.log(data);

      } else {
        alert('Failed to create post');
      }
    } catch(err) {
      console.error(err);
    }
  }
}


document.querySelector('.update-post-form').addEventListener('submit',updateFormHandler);