const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(event.target);
    let confirmDelete = confirm(
      'Are you sure you want to delete the post?'
    );
    if (!confirmDelete) {
      return;
    }
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        const responseData = await response.json();
        alert(responseData.message || 'Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('An error occurred while deleting the post');
    }
  }
};

document
  .querySelector('.btn-danger')
  .addEventListener('click', delButtonHandler);
