document.addEventListener('DOMContentLoaded', function () {
  // Firebase configuration (ganti dengan konfigurasi Firebase Anda)
  const firebaseConfig = {
    apiKey: "AIzaSyCs05DhIJt_aGRB9RPCXM22d080s5arj6Y",
    authDomain: "database-7d04e.firebaseapp.com",
    databaseURL: "https://database-7d04e-default-rtdb.firebaseio.com",
    projectId: "database-7d04e",
    storageBucket: "database-7d04e.appspot.com",
    messagingSenderId: "979988352807",
    appId: "1:979988352807:web:6675899e0b7af524b1e302",
    measurementId: "G-BD48HPMRG7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const commentForm = document.getElementById('commentForm');
  const commentSection = document.getElementById('commentSection');

  // Fungsi untuk menambah komentar ke Firestore
  commentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const comment = document.getElementById('comment').value;

      db.collection('comments').add({
          name: name,
          comment: comment,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
          commentForm.reset();
      }).catch((error) => {
          console.error("Error adding document: ", error);
      });
  });

  // Fungsi untuk menampilkan komentar yang tersimpan di Firestore
  db.collection('comments').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      commentSection.innerHTML = '';
      snapshot.forEach((doc) => {
          const commentData = doc.data();
          const commentElement = document.createElement('div');
          commentElement.className = 'comment';
          commentElement.innerHTML = `<strong>${commentData.name}</strong>: <p>${commentData.comment}</p>`;
          commentSection.appendChild(commentElement);
      });
  });
});
