import { request } from '@/apis/axiosInstance';
import { goodsListAtom } from '@/store/goods';
import { useSetRecoilState } from 'recoil';

async function requestGoodsList(pageNo: number): Promise<any> {
  const response = await request({
    method: 'GET',
    url: `/data/goods${pageNo}.json`
  });

  return response;
}

export function useGoods() {
  const setGoodsList = useSetRecoilState(goodsListAtom);
  async function fetchGoodsList(
    params: number,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setIsLoading(true);
      const { list } = await requestGoodsList(params);

      setIsLoading(false);
      setGoodsList(acc => ({
        goodsList: [...acc.goodsList, ...list],
        pagination: { ...acc.pagination, page: acc.pagination.page + 1 }
      }));
    } catch (e) {
      console.error(e, '상품 정보를 가져올 수 없습니다.');
    }
  }

  return {
    fetchGoodsList
  };
}
