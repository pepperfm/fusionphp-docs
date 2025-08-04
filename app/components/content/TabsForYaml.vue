<script setup lang="ts">
const proceduralCode = `<span class="material-red">&lt;php&gt;</span>
  <span class="material-blue">$name</span> = <span class="material-purple">prop</span>(<span class="material-purple">auth</span>()-&gt;<span class="material-purple">user</span>()-&gt;<span class="material-blue">name</span>);
<span class="material-red">&lt;/php&gt;</span>

<span class="material-red">&lt;template&gt;</span>
  Hello {{ <span class="material-blue">name</span> }}!
<span class="material-red">&lt;/template&gt;</span>`

const classBasedCode = `<span class="material-red">&lt;php&gt;</span>
  <span class="material-blue">new</span> <span class="material-blue">class</span> {
    <span class="material-blue">public</span> <span class="material-blue">string</span> <span class="material-blue">$name</span>;

    <span class="material-blue">public</span> <span class="material-purple">function</span> <span class="material-purple">mount</span>()
    {
      <span class="material-blue">$this</span>-&gt;<span class="material-blue">name</span> = <span class="material-purple">Auth</span>()-&gt;<span class="material-purple">user</span>()-&gt;<span class="material-blue">name</span>;
    }
  }
<span class="material-red">&lt;/php&gt;</span>

<span class="material-red">&lt;template&gt;</span>
  Hello {{ <span class="material-blue">name</span> }}!
<span class="material-red">&lt;/template&gt;</span>`
</script>

<template>
  <ProseCodeGroup>
    <ProsePre
      filename="Procedural.vue"
      icon="i-vscode-icons:file-type-vue"
      language="php"
    >
      <div v-html="proceduralCode" />
    </ProsePre>
    <ProsePre
      filename="ClassBased.vue"
      icon="i-vscode-icons:file-type-vue"
      language="php"
    >
      <div v-html="classBasedCode" />
    </ProsePre>
  </ProseCodeGroup>
</template>

<style>
.material-red {
  color: #d16969; /* errors, invalid */
}

.material-green {
  color: #608b4e; /* strings, property names */
}

.material-blue {
  color: #569cd6; /* keywords, types, variable names */
}

.material-yellow {
  color: #dcdcaa; /* constants, numbers */
}

.material-orange {
  color: #ce9178; /* string literals, annotation, attributes */
}

.material-gray {
  color: #808080; /* comments */
}

.material-purple {
  color: #c586c0; /* function names, tags */
}
</style>
