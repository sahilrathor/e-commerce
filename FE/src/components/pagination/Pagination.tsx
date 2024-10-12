import { Pagination } from 'antd';

const PaginationComponent = ({ totalItems, onPageChange }: { totalItems: number, onPageChange: (page: number) => void }) => {
    return (
        <Pagination
            total={totalItems}
            align='center'
            pageSize={10}
            showSizeChanger={false}
            onChange={onPageChange}
        />
    );
};

export default PaginationComponent;
