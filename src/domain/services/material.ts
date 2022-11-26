import { db } from './cloudbase'
import { Material } from '@/domain/entities/material'

export function getMaterials() {
  return db.collection('material').get() as Promise<Response<Material>>
}

export function createMaterial(data: Partial<Material>) {
  return db.collection('material').add(data)
}

export function updateMaterial(id: string, data: Partial<Material>) {
  return db.collection('material').doc(id).update(data)
}

export function removeMaterial(id: string) {
  return db.collection('material').doc(id).remove()
}
