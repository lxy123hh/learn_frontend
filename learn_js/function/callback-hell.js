function doSomething(callback) {
    setTimeout(() => {
      console.log("Doing something...");
      callback();  // 调用回调
    }, 1000);
  }
  
  function doSomethingElse(callback) {
    setTimeout(() => {
      console.log("Doing something else...");
      callback();  // 调用回调
    }, 1000);
  }
  
  function doAnotherThing(callback) {
    setTimeout(() => {
      console.log("Doing another thing...");
      callback();  // 调用回调
    }, 1000);
  }
  
  function doFinalThing(callback) {
    setTimeout(() => {
      console.log("Doing the final thing...");
      callback();  // 调用回调
    }, 1000);
  }
  
  doSomething(function() {
    doSomethingElse(function() {
      doAnotherThing(function() {
        doFinalThing(function() {
          console.log("Done!");  // 最后打印 Done!
        });
      });
    });
  });

  
  //每次请求数据有依赖关系
wx.request({
  url: 'https://api.example.com/data1',
  success: function(res1) {
    console.log('Data 1:', res1.data);
    wx.request({
      url: 'https://api.example.com/data2',
      success: function(res2) {
        console.log('Data 2:', res2.data);
        wx.request({
          url: 'https://api.example.com/data3',
          success: function(res3) {
            console.log('Data 3:', res3.data);
          }
        });
      }
    });
  }
})