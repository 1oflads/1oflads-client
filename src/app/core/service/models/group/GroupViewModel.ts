import {GroupMemberViewModel} from "./GroupMemberViewModel";

export class GroupViewModel {
    constructor(
        public name: string = '',
        public avatarUrl: string = '',
        public description: string = '',
        public backgroundColor: string = '',
        public backgroundUrl: string = '',
        public innerBackgroundColor: string = '',
        public fontColor: string = '',
        public members: GroupMemberViewModel[] = []
    ) {

    }
}
