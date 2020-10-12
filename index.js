import {Select} from "./select/select";
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Please select an item',
    selectedId: '1',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'JavaScript'},
        {id: '5', value: 'React 2'},
        {id: '6', value: 'React 3'},
        {id: '7', value: 'React 4'},
    ],
    onSelect(item) {
        console.log(item);
    }
});

window.s = select;
