export const fetchPost = async (textNewNote) => {
    let bodyFetchPost = {
      id: 0,
      content: textNewNote
    };
    const response = await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyFetchPost)
    });
  };