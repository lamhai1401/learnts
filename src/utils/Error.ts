import YAML from 'yaml'


export class ErrorBase extends Error {
  code = 401

  constructor(public msg?: string, public data?: any) {
    super(msg)
  }

  detail(){
    try {
      return YAML.stringify(this.data || null)
    } catch {}
    return null
  }

  toMessage() {
    return this.constructor.name
      .replace(/[A-Z]/g,e => ` ${e}`)
      .trim() + '\n' + this.detail() 
  }

  toCode() {
    return this.code
  }
}


export class InvalidDataError extends ErrorBase {
  
}

export class RoomLimitError extends ErrorBase {
  
}

export class ServiceError extends ErrorBase {
  
}