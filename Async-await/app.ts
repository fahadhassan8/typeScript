
//fetch is a pre defined func that returns promise
// fetch require api 

// fetch

let url:string = 'https://jsonplaceholder.typicode.com/posts/1'

// let fetchData = fetch(url)

// .then(res => res.json())
// .then(data => console.log(data));
// .catch(err => console.log(err))

// async await
// return promise
let func = async() => {
    let fetchData = await fetch(url);
    let res = await fetchData.json()
    console.log(res)
}
func()
// async function nam(){

// }
