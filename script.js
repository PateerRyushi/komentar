document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('comments');
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Mengambil nilai dari form
      const name = document.getElementById('name').value;
      const comment = document.getElementById('comment').value;
      const attendance = document.getElementById('attendance').value;
  
      // Membuat elemen untuk menampilkan komentar
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <strong>${name}</strong> - ${attendance}<br>
        ${comment}
      `;
  
      // Menambahkan komentar ke dalam container komentar
      commentsContainer.prepend(commentElement);
  
      // Reset form setelah mengirim komentar
      commentForm.reset();
  
      // Menampilkan gambar setelah mengirim komentar
      showImage();
  
      // Hapus gambar setelah beberapa detik
      setTimeout(function() {
        const image = document.querySelector('.comment-image');
        if (image) {
          image.remove();
        }
      }, 5000); // Hapus gambar setelah 5 detik (5000 milidetik)
    });
  
    // Fungsi untuk menampilkan gambar
    function showImage() {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');
      const image = document.createElement('img');
      image.src = 'image.jpg'; // Ganti dengan path gambar yang sesuai
      image.alt = 'Wedding Image'; // Deskripsi alternatif untuk gambar
      image.classList.add('comment-image');
      imageContainer.appendChild(image);
      commentsContainer.appendChild(imageContainer);
    }
  });
  