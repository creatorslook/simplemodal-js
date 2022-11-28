# Simple Modal Js
A very customizable and simple library for creating modals in react.

* Written in React typescript
* More features are in progress
* Contributions are welcomed

# Docs
* npm install : 
```js
npm install simplemodal-js
```
* Usage : 
```jsx
import Modal from "simplemodal-js"

const ExampleComponent = () => {
    const [isOpen, setOpen] = useState(false)

    const handleModal = () => {
        setOpen((prev) => !prev)
    }
    
    return (
        <div>
            <button onClick={handleModal}>Open modal</button>
            <Modal isOpen={isOpen}>
                <h1>Hello World</h1>
                <button onClick={handleModal}>Close modal</button>
            </Modal>
        </div>
    )
}

export default ExmapleComponent;
```

* Info : 
    * Child props are fully editable and close functions should be passed into the child prop as shown above.
    * Child props should be enclosed in divs and styled accordingly

    ```js
    <Modal isOpen={isOpen}>
    <div className="exmapleClass">
    <h1>Hello World</h1>
    <button onClick={handleModal}></button>
    </div>
    </Modal>
    ```
* Props : 

| Props     | Types |
| ----------- | ----------- |
| setOpen     | boolean      |
| children  | any    |