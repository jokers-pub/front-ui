## Loading  

Displays animation effects during data loading.  

### Area Display  

You can specify the host element for loading display by configuring the `target` property.  

!!!demo1!!!  

### Fullscreen Display  

Enable fullscreen Loading by setting `fullscreen` or specifying `target` as **body**.  

!!!demo2!!!  

> Note: Only one fullscreen Loading can exist at a time. If triggered repeatedly, the previous incomplete Loading operation component will be returned.  

It is important to note that fullscreen Loading called as a service is a singleton: if another fullscreen Loading is called before the previous one is closed, it will not create a new Loading instance; instead, it will return the existing fullscreen Loading instance:  

```js  
let loading1 = Loading({ fullscreen: true });  
let loading2 = Loading({ fullscreen: true });  
console.log(loading1 === loading2); // true  
```  

At this point, calling the `close` method of any of them will close the fullscreen Loading.  

### Customization  

Customizable loading text, icon, and background color.  

!!!demo3!!!  

### Options  

| Parameter     | Description                                                                                                                                       | Type                                               | Options | Default       |  
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ------- | ------------- |  
| target        | The DOM node that Loading needs to cover. Can be a DOM object or a string. If a string is passed, it will be used as input for `document.querySelector` to retrieve the corresponding DOM node. | Element / string / VNode.Node; supports VNode nodes | —       | document.body |  
| fullscreen    | Whether to display in fullscreen mode                                                                                                   | boolean                                            | —       | true          |  
| text          | Loading text displayed below the loading icon                                                                                              | string                                             | —       | —             |  
| spinner       | Custom loading icon class name                                                                                                               | string                                             | —       | —             |  
| customClass   | Custom class name for Loading                                                                                                              | string                                             | —       | —             |  

### Methods  

Calling `Loading` will return the current Loading instance. To manually close the instance, you can call its `close` method.  
| Method Name | Description |  
| ---------- | ----------- |  
| close      | Closes the current Loading |