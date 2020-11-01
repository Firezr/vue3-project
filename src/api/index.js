import { request } from '../utils/axios'

export function getPlanList() {
  return request({
    url: '/plan',
    methods: 'get',
  })
}

export function addPlan(data) {
  return request({
    url: '/plan',
    methods: 'post',
    data
  })
}

export function deletePlan(id) {
  return request({
    url: '/plan',
    methods: 'delete',
    params: { id }
  })
}