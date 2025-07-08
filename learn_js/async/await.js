async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('请求失败');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('错误:', error);
  }
}

fetchData();