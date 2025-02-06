import {
  IPagination,
  IPaginationResponse,
} from '../interfaces/pagination.interface';

export class Pagination implements IPagination {
  generate(
    totalItems: number,
    page: number,
    limit: number,
  ): IPaginationResponse {
    const totalPages = Math.ceil(totalItems / limit);

    const prevPage = page > 1 ? page - 1 : null;

    const nextPage = page < totalPages ? page + 1 : null;

    return {
      total_items: totalItems,
      limit_per_page: limit,
      current_page: page,
      prev_page: prevPage,
      next_page: nextPage,
      total_pages: totalPages,
    };
  }
}
