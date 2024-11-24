
export type PdiDados = {
    startDoing: string,
    stopDoing: string,
    doLess: string,
    keepDoing: string,
    doMore: string,
    goal: string,
};

export type HTTP_GET_USER_PDI = PdiDados & {
    id: string
    createdAt: string
    userId: string
} 

export type PdiCardData = {
    title: string;
    placeholder: string;
    formControlName: string;
    isEditing?: boolean
}