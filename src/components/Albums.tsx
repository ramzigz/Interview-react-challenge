import { Avatar, Breadcrumb, Button, List } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAlbumsAction } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

interface AlbumType {
    title: string;
    id: string;
}

const limit = 20;
const Albums: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { albums, loading } = useAppSelector((state) => {
        return (state.albums)
    });

    const [start, setStart] = useState(0);

    useEffect(() => {
        getAlbums(start, limit);
    }, []);

    const getAlbums = (start: number, limit: number) => {
        dispatch(getAlbumsAction({ start, limit }))
    }

    const onLoadMore = () => {
        getAlbums(start + limit, limit);
        setStart(start + limit);
    };

    const loadMore =
        !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;

    return (
        <div className="container">
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    Albums
                </Breadcrumb.Item>
            </Breadcrumb>

            <List
                className="loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={albums}
                renderItem={(item: AlbumType) => (
                    <List.Item
                        actions={[<Button onClick={() => navigate("/albums/" + item.id)}>details</Button>
                        ]}
                    >
                        <Avatar size={64} src={'https://cdn2.iconfinder.com/data/icons/instagram-filled-outline/19/16-512.png'} />
                        <List.Item.Meta
                            title={item?.title}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Albums;