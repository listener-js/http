> **[http](../README.md)**

[Globals](../globals.md) / ["http"](../modules/_http_.md) / [Http](_http_.http.md) /

# Class: Http

## Hierarchy

* **Http**

## Index

### Properties

* [listeners](_http_.http.md#static-listeners)

### Methods

* [http](_http_.http.md#static-http)
* [httpError](_http_.http.md#static-httperror)

## Properties

### `Static` listeners

▪ **listeners**: *string[]* =  ["http", "httpError"]

Defined in http.ts:21

## Methods

### `Static` http

▸ **http**(`id`: string[], `url`: string, `arg`: [HttpArg](../interfaces/_http_.httparg.md)): *`Promise<HttpOutput>`*

Defined in http.ts:23

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string[] | - |
`url` | string | - |
`arg` | [HttpArg](../interfaces/_http_.httparg.md) |  {} |

**Returns:** *`Promise<HttpOutput>`*

___

### `Static` httpError

▸ **httpError**(`id`: string[], `error`: string): *string*

Defined in http.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`error` | string |

**Returns:** *string*