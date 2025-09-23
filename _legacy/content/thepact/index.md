---
title: Synopsis
section: Act 01 - The Pact
description: Last Contact is a sci-fi political thriller space opera set in the 23rd and 24th centuries. Act 01 - The Pact sees A pact being made that would see humanity become part of a larger universe around it.
author: Josie Troiani
asIndexPage: true
---
import { Cards } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'
import { createIndexPage, getPageMap } from 'nextra/page-map'

# Act 01: The Pact

## Synopsis

A pact is made that would see humanity become part of a larger universe around it.

## Chapters

<MDXRemote
  compiledSource={
    await createIndexPage(
      await getPageMap('/thepact')
    )
  }
  components={{
    Cards,
  }}
/>
