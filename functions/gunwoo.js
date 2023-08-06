exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Gunwoo',
      age: 24,
      email: 'gunwoo@qwe.com'
    })
  }  
}