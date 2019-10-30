import React, {useEffect, useState} from 'react';
import './App.css';

const fetchPageStuff = cb => {
  fetch('https://wordpress.francisle.ninja/wp-json/wp/v2/pages')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json)

    const titleList = []
    for (const page of json) {
      titleList.push(page.title.rendered)
    }

    cb(titleList)
  });

}

// allowed?
const useData = () => {
  const [value, setValue] = useState(null)
}

// allowed?
const useTodoFunctionality = (id) => {
  const [todo, setTodo] = useState([]);
}

const Widget = () => {
  const [titleList, setTitleList] = useState([])
  const [titleOfPage, setTitle] = useState("")

  useEffect(() => {
    fetchPageStuff(setTitleList)
  },[])

  return (
    <div className="Widget">
      <h1>I AM WIDGET</h1>
      <p>{titleList}</p>
      { bob && <button>YAY</button>}
    </div>
  );
}

export default Widget;