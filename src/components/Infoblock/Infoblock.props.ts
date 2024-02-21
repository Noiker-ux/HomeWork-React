import { INameWithId, IPlatforms } from '../../assets/IGame';

export type TdataForInfoBlock = INameWithId[] | IPlatforms[] | string | number

export interface IInfoblockProps {
	data: TdataForInfoBlock
	title: string
}