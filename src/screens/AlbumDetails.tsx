import { Breadcrumb, Image, Typography, List, PageHeader } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import AlbumDetailsComponent from '../components/AlbumDetailsComponent';
import { getAlbumPhotosAction } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { AlbumPhotosType } from '../types';
const { Title } = Typography;

const limit = 32;


const AlbumDetails: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { albumPhotos, selectedAlbum } = useAppSelector((state) =>
        state.albums,
    );
    const { albumId } = useParams();
    const [start, setStart] = useState(0);
    const [pageSize, setPageSize] = useState(8);


    useEffect(() => {
        getAlbumPhotos(start, limit)
    }, []);

    const getAlbumPhotos = (start: number, limit: number) => {
        dispatch(getAlbumPhotosAction({ albumId, start, limit }))
    }

    const loadMore = () => {
        getAlbumPhotos(start + limit, limit)
        setStart(start + limit);
    };

    return (
        <div className="container">
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/albums">Albums</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Details
                </Breadcrumb.Item>
            </Breadcrumb>

            <PageHeader
                className="site-page-header"
                onBack={() => navigate('/')}
                title={selectedAlbum?.title}
            />
            <div className="details-container">
                <List
                    grid={{ gutter: 16, column: 4 }}
                    size="large"
                    pagination={{
                        onChange: page => {
                            if (page * pageSize === start + limit) {
                                loadMore();
                            }
                        },
                        pageSize,
                    }}
                    dataSource={albumPhotos}
                    renderItem={(item: AlbumPhotosType) => (
                        <List.Item
                            key={item?.title}
                            extra={
                                <AlbumDetailsComponent album={item} />
                            }
                        >

                        </List.Item>
                    )}
                />
            </div>
        </div >
    );
};

export default AlbumDetails;
