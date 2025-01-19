import { fetchAlbums, filterAlbumsBySearch } from './albumService';
import { fetchData } from '../../../share/utils/fetchData';

vi.mock('../../../share/utils/fetchData', () => ({
  fetchData: vi.fn(),
}));

test('fetchAlbums calls fetchData with correct parameters', async () => {
  const mockData = [
    { albumName: 'Album 1', thumbnail: 'http://example.com/1.jpg' },
    { albumName: 'Album 2', thumbnail: 'http://example.com/2.jpg' },
  ];
  fetchData.mockResolvedValue(mockData);

  const albums = await fetchAlbums('Test Artist');
  expect(fetchData).toHaveBeenCalledWith('/albums', { artist: 'Test Artist' });
  expect(albums).toEqual(mockData);
});

test('filterAlbumsBySearch filters albums correctly', () => {
  const albums = [
    { albumName: 'Test Album 1', thumbnail: 'http://example.com/1.jpg' },
    { albumName: 'Another Album', thumbnail: 'http://example.com/2.jpg' },
  ];
  const filtered = filterAlbumsBySearch(albums, 'test');
  expect(filtered).toEqual([{ albumName: 'Test Album 1', thumbnail: 'http://example.com/1.jpg' }]);
});
