export enum ActionTypes {
  filterOpen = 'FILTER_OPEN',
  filterCLose = 'FILTER_CLOSE',
  filterStatus = 'FILTER_STATUS',
}

export interface Filter {
  sortBy: number;
  orderBy: number;
}

export interface FilterState {
  filterShow: boolean;
  filterClass: Filter;
}
