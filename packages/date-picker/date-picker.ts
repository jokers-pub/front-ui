import Picker from "./picker.joker";

export default class extends Picker {
    constructor(...args: any[]) {
        super(...args);

        //@ts-ignore
        this.propsOption.type = "date";
    }
}
