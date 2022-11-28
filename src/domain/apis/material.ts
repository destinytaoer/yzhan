import request from '../services/request'

export function getMaterials() {
  return request.get('/api/material/list')
}
