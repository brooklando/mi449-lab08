import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://gdoaelizncrifafgtlzq.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb2FlbGl6bmNyaWZhZmd0bHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDE1OTMsImV4cCI6MjAyNjM3NzU5M30.4QfPI6jsUEY9IYCvueLq_fSRqUBJFuqq2hFLdqOhEpg'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
     let bookList = document.getElementById('books');
     bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
   }
}

getBooks();