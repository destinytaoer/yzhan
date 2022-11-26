import { db } from './cloudbase'
import { Material } from '@/domain/entities/material'

const collection = 'material'

export function getMaterials() {
  return db.collection(collection).get() as Promise<Response<Material>>
}

export function createMaterial(data: Partial<Material>) {
  return db.collection(collection).add(data)
}

export function updateMaterial(id: string, data: Partial<Material>) {
  return db.collection(collection).doc(id).update(data)
}

export function removeMaterial(id: string) {
  return db.collection(collection).doc(id).remove()
}
