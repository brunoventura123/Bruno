import { Photo } from "../types/Photo"
import { storage } from "../libs/firebase"
import {ref, listAll, getDownloadURL} from 'firebase/storage'



export const getAll = async (info: string | undefined) => {
    let list: Photo[] = []

    const imagesFolder = ref(storage, info)
    const photoList = await listAll(imagesFolder)

    for(let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i])

        list.push({
            name:photoList.items[i].name,
            url:photoUrl
        })
    }

    return list
}