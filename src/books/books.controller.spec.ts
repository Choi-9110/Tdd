import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getBooks', () => {
    it('should call', async () => {
      //const book = { id: 1, name: 'goodbooks' };
      const book = { id: 1, name: 'good book' };
      //  const spy = jest.spyOn(service, 'getBook').mockResolvedValue(book);

      expect(await controller.getBooks(1)).toStrictEqual(book);
      //expect(spy).toBeCalledWith(1);
    });
  });
});
