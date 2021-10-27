
---
title: "exampleFunc"
title_tag: "my8110.exampleFunc"
meta_desc: "Documentation for the my8110.exampleFunc function with examples, input properties, output properties, and supporting types."
layout: api
no_edit_this_page: true
---



<!-- WARNING: this file was generated by test. -->
<!-- Do not edit by hand unless you're certain you know what you are doing! -->




## Using exampleFunc {#using}

{{< chooser language "typescript,python,go,csharp" / >}}


{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">function </span>exampleFunc<span class="p">(</span><span class="nx">args</span><span class="p">:</span> <span class="nx">ExampleFuncArgs</span><span class="p">,</span> <span class="nx">opts</span><span class="p">?:</span> <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions">InvokeOptions</a></span><span class="p">): Promise&lt;<span class="nx"><a href="#result">ExampleFuncResult</a></span>></span></code></pre></div>
{{% /choosable %}}


{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span>example_func(</span><span class="nx">enums</span><span class="p">:</span> <span class="nx">Optional[Sequence[Union[str, MyEnum]]]</span> = None<span class="p">,</span>
                 <span class="nx">opts</span><span class="p">:</span> <span class="nx"><a href="/docs/reference/pkg/python/pulumi/#pulumi.InvokeOptions">Optional[InvokeOptions]</a></span> = None<span class="p">) -&gt;</span> ExampleFuncResult</code></pre></div>
{{% /choosable %}}


{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>ExampleFunc<span class="p">(</span><span class="nx">ctx</span><span class="p"> *</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">,</span> <span class="nx">args</span><span class="p"> *</span><span class="nx">ExampleFuncArgs</span><span class="p">,</span> <span class="nx">opts</span><span class="p"> ...</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#InvokeOption">InvokeOption</a></span><span class="p">) (*<span class="nx"><a href="#result">ExampleFuncResult</a></span>, error)</span></code></pre></div>

> Note: This function is named `ExampleFunc` in the Go SDK.

{{% /choosable %}}


{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static class </span><span class="nx">ExampleFunc </span><span class="p">{</span><span class="k">
    public static </span>Task&lt;<span class="nx"><a href="#result">ExampleFuncResult</a></span>> <span class="p">InvokeAsync(</span><span class="nx">ExampleFuncArgs</span><span class="p"> </span><span class="nx">args<span class="p">,</span> <span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.InvokeOptions.html">InvokeOptions</a></span><span class="p">? </span><span class="nx">opts = null<span class="p">)</span><span class="p">
}</span></code></pre></div>
{{% /choosable %}}



The following arguments are supported:


{{% choosable language csharp %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="enums_csharp">
<a href="#enums_csharp" style="color: inherit; text-decoration: inherit;">Enums</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">List&lt;Union&lt;string, Pulumi.<wbr>My8110.<wbr>My<wbr>Enum&gt;&gt;</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language go %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="enums_go">
<a href="#enums_go" style="color: inherit; text-decoration: inherit;">Enums</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language nodejs %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="enums_nodejs">
<a href="#enums_nodejs" style="color: inherit; text-decoration: inherit;">enums</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">(string | My<wbr>Enum)[]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties"><dt class="property-optional"
            title="Optional">
        <span id="enums_python">
<a href="#enums_python" style="color: inherit; text-decoration: inherit;">enums</a>
</span>
        <span class="property-indicator"></span>
        <span class="property-type">Sequence[Union[str, My<wbr>Enum]]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd></dl>
{{% /choosable %}}




## exampleFunc Result {#result}

The following output properties are available:






## Supporting Types


<h4 id="myenum">My<wbr>Enum</h4>







<h2 id="package-details">Package Details</h2>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href=""></a></dd>
	<dt>License</dt>
	<dd></dd>
</dl>
