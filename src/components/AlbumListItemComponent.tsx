import { List, Image } from 'antd';
import { Fragment } from 'react';
import { AlbumType } from '../types';

const AlbumListItemComponent = (props: {
    album: AlbumType,
}) => {
    const { album } = props;
    return (
        <Fragment>
            <img
                height={64}
                src='https://cdn2.iconfinder.com/data/icons/instagram-filled-outline/19/16-512.png'
                alt='album-avatar'
            />
            <List.Item.Meta
                title={album?.title}
            />

        </Fragment>

    );
};
export default AlbumListItemComponent;
