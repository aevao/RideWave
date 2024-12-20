import economy from '../../assets/images/options/economy-taxi.png'
import comfortIcon from '../../assets/images/options/comfort-taxi.png'
import comfortPlusIcon from '../../assets/images/options/comfort-plus-taxi.png'
import businessIcon from '../../assets/images/options/buisnes-taxi.png'

interface IList {
    _id: string;
    title: string;
    img: string;
    multiplier: number;
}

export const optionsList : IList[] = [
    {
        _id: 'Ya-economy-439',
        title: 'Economy',
        img: economy.src,
        multiplier: 46
    },
    {
        _id: 'Ya-comfort-541',
        title: 'Comfort',
        img: comfortIcon.src,
        multiplier: 64
    },
    {
        _id: 'Ya-comfort-plus-583',
        title: 'Comfort+',
        img: comfortPlusIcon.src,
        multiplier: 72
    },
    {
        _id: 'Ya-business-899',
        title: 'business',
        img: businessIcon.src,
        multiplier: 117
    }
]