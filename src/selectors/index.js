import {createSelector} from 'reselect'

const clientsGetter = state => state.clientsReducer.get('clients')
const selectedIdGetter = state => state.clientsReducer.get('selectedId')

export const clientSelector = createSelector(clientsGetter, selectedIdGetter, (clientsLists, id) => {
   	if (id) {
	   	return mapToArray(clientsLists).filter(client => client.id === id)
	}else {
		return null
	}
})


export const clientsListSelector = createSelector(clientsGetter, (clients) => {
    return mapToArray(clients)
})


function mapToArray(obj) {
  //иммутаб. объект возвращаем к обычному массиву
  let arr = []
  obj
    .valueSeq()
    .toArray()
    .forEach(el => arr.push(el.toJS()))
  return arr
}