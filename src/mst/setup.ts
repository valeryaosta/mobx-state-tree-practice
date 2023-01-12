import {RootModel} from "./index";
import {onSnapshot} from "mobx-state-tree";


export const setupRootStore = () => {
    const rootTree = RootModel.create({
        employer: {
            id: "1",
            name: "Eat and Chill",
            location: "Barcelona, Spain",
            employees: []
        },
    });
    onSnapshot(rootTree, (snapshot) => console.log('snapshot', snapshot));
    // const currentRootTree = getSnapshot(rootTree);
    // applySnapshot(rootTree, {...currentRootTree,
    //     employer: {...currentRootTree.employer, location: "Madrid, Spain"}
    // });
    return {rootTree}
}