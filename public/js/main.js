

document.addEventListener('DOMContentLoaded', () => {
    // Add active class to the current navigation link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});


            // 1 HOMEPAGE NAVIGATION \\

// Add a click event listener to the homepage option
document.getElementById('Home').addEventListener('click', function() {
    window.location.href = '/homepage'; // Redirect to the homepage URL
  });
  



            // 2 PROMPT FOR SIGN-UP OR SIGN-IN \\

  // Add click event listeners to other links in the navigation bar
document.getElementById('Sign-Up').addEventListener('click', function() {
    checkAuthentication(); // Check if the user is signed in
  });
  document.getElementById('Login').addEventListener('click', function() {
    checkAuthentication(); // Check if the user is signed in
  });
  
  function checkAuthentication() {
    // Send an HTTP request to the server to check if the user is signed in
    fetch('/check-authentication')
      .then(function(response) {
        if (response.status === 200) {
          // User is signed in, proceed with the action
        } else {
          // User is not signed in, prompt for sign up or sign in
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }
  


            // 3 USER SIGN-UP \\

  document.getElementById('sign-up-button').addEventListener('click', function() {
    var username = document.getElementById('username-input').value;
    var password = document.getElementById('password-input').value;
  
    // Send an HTTP request to the server to save the user credentials
    fetch('/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(function(response) {
        if (response.status === 200) {
          // User sign-up successful
          window.location.href = '/dashboard'; // Redirect to the dashboard
        } else {
          // Handle sign-up error
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });
  


            // 4 USER SIGN-IN \\

  document.getElementById('sign-in-button').addEventListener('click', function() {
    var username = document.getElementById('username-input').value;
    var password = document.getElementById('password-input').value;
  
    // Send an HTTP request to the server to verify the user credentials
    fetch('/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(function(response) {
        if (response.status === 200) {
          // User sign-in successful
          window.location.href = '/dashboard'; // Redirect to the dashboard
        } else {
          // Handle sign-in error
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });
  

            // 5 AUTHENTICATED USER NAVIGATION \\

  // After successful sign-in, update the navigation links
function updateNavigationLinks() {
    document.getElementById('homepage-link').style.display = 'block';
    document.getElementById('dashboard-link').style.display = 'block';
    document.getElementById('logout-link').style.display = 'block';
  }
  
  // Call this function after successful sign-in
  updateNavigationLinks();



         // 6 HOMEPAGE DISPLAY \\

  // Add a click event listener to the homepage option
document.getElementById('homepage-link').addEventListener('click', function() {
    // Send an HTTP request to the server to retrieve existing blog posts
    fetch('/homepage-posts')
      .then(function(response) {
        if (response.status === 200) {
          return response.json();
        } else {
          // Handle error
        }
      })
      .then(function(data) {
        // Render the retrieved blog post data on the homepage
        // Code to render the blog post data on the page
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });


            // 7 DISPLAY BLOG POST \\

  // Add a click event listener to an existing blog post
document.getElementById('blog-post').addEventListener('click', function() {
    // Send an HTTP request to the server to retrieve the selected blog post data
    fetch('/blog-post?id=123') // Replace 123 with the actual ID of the blog post
      .then(function(response) {
        if (response.status === 200) {
          return response.json();
        } else {
          // Handle error
        }
      })
      .then(function(data) {
        // Render the blog post details on the page
        // Code to display the blog post title, content, creator's username, and creation date
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });
  



            // 8 SUBMIT COMMENT \\

// Add a click event listener to the submit button for leaving a comment
document.getElementById('submit-comment-button').addEventListener('click', function() {
    var comment = document.getElementById('comment-input').value;
  
    // Send an HTTP request to the server to save the comment for the selected blog post
    fetch('/submit-comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postId: '123', // Replace 123 with the actual ID of the blog post
        comment: comment
      })
    })
      .then(function(response) {
        if (response.status === 200) {
          // Comment submission successful
          // Update the blog post to display the new comment, comment creator's username, and the date created
        } else {
          // Handle error
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });
  



            // 9 DASHBOARD DISPLAY \\

    // Add a click event listener to the dashboard option
document.getElementById('dashboard-link').addEventListener('click', function() {
    // Send an HTTP request to the server to retrieve the user's existing blog posts
    fetch('/dashboard-posts')
      .then(function(response) {
        if (response.status === 200) {
          return response.json();
        } else {
          // Handle error
        }
      })
      .then(function(data) {
        // Render the retrieved blog posts on the dashboard page
        // Code to render the user's blog posts on the dashboard
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });

  


            // 10 CREATE NEW BLOG POST \\

    // Add a click event listener to the button to add a new blog post
document.getElementById('add-post-button').addEventListener('click', function() {
    var title = document.getElementById('title-input').value;
    var content = document.getElementById('content-input').value;
  
    // Send an HTTP request to the server to save the new blog post
    fetch('/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: content
      })
    })
      .then(function(response) {
        if (response.status === 200) {
          // Blog post creation successful
          // Redirect the user back to the updated dashboard page
        } else {
          // Handle error
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });

  


            // 11 UPDATE/DELETE BLOG POST \\

    // Add click event listeners on the user's existing blog posts in the dashboard
var blogPostElements = document.getElementsByClassName('blog-post');
Array.from(blogPostElements).forEach(function(element) {
  element.addEventListener('click', function() {
    var postId = element.dataset.id; // Get the ID of the clicked blog post

    // Show options to delete or update the selected blog post

    // Implement click events for delete and update actions
    document.getElementById('delete-post-button').addEventListener('click', function() {
      // Send an HTTP request to the server to delete the selected blog post
      fetch('/delete-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          postId: postId
        })
      })
        .then(function(response) {
          if (response.status === 200) {
            // Blog post deletion successful
            // Redirect the user back to the updated dashboard page
          } else {
            // Handle error
          }
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
    });

    document.getElementById('update-post-button').addEventListener('click', function() {
      // Update the selected blog post

      // Send an HTTP request to the server to update the selected blog post
      fetch('/update-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          postId: postId,
          updatedTitle: 'Updated Title', // Replace with the actual updated title
          updatedContent: 'Updated Content' // Replace with the actual updated content
        })
      })
        .then(function(response) {
          if (response.status === 200) {
            // Blog post update successful
            // Redirect the user back to the updated dashboard page
          } else {
            // Handle error
          }
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
    });
  });
});




            // 12 LOGOUT \\

    // Add a click event listener to the logout option
document.getElementById('logout-link').addEventListener('click', function() {
    // Send an HTTP request to the server to log the user out
    fetch('/logout')
      .then(function(response) {
        if (response.status === 200) {
          // User logged out successfully
          window.location.href = '/'; // Redirect to the homepage
        } else {
          // Handle error
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });

  


            // 13 IDLE TIMEOUT \\


            var timeoutDuration = 300000; // 5 minutes (in milliseconds)
            var idleTimeout;
            
            function resetTimeout() {
              clearTimeout(idleTimeout);
              idleTimeout = setTimeout(function() {
                // Prompt the user to log in again before allowing them to add, update, or delete posts
                // You can display a modal or redirect to the login page
              }, timeoutDuration);
            }
            
            // Add event listeners for user activity events
            document.addEventListener('mousemove', resetTimeout);
            document.addEventListener('keydown', resetTimeout);
            document.addEventListener('scroll', resetTimeout);
            
            