<%@page import="java.util.*, org.uva.*" errorPage="/research/ShowError.jsp"%>
<%@ taglib uri="/tags" prefix="pi" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" >
<%!
	class Question
	{
		String name, text;
		private JspWriter out = null;
		public Question(String n, String t)
		{
			name = n;
			text = t;
		}
		public void setOut(JspWriter out) 
		{ 
			this.out = out; 
		}
		public void writeName() throws java.io.IOException
		{
			out.print(name);
		}
		public void writeText() throws java.io.IOException
		{
			out.print(text);
		}
	}
	class SDQuestion
	{
		String name, first, second;
		private JspWriter out = null;
		public SDQuestion(String n, String f, String s)
		{
			name = n;
			first = f;
			second = s;
		}
		public void setOut(JspWriter out) 
		{ 
			this.out = out; 
		}
		public void writeName() throws java.io.IOException
		{
			out.print(name);
		}
		public void writeFirst() throws java.io.IOException
		{
			out.print(first);
		}
		public void writeSecond() throws java.io.IOException
		{
			out.print(second);
		}
	}

%>
<%
Question q1a = new Question("q1a", "the order in which the category sorting tasks were presented");
Question q1b = new Question("q1b", "my conscious knowledge about the topics");
Question q1c = new Question("q1c", "my unconscious knowledge about the topics");
Question q1d = new Question("q1d", "knowledge about how others generally regard the topics");
Question q1e = new Question("q1e", "how the groups or topics are portrayed in news or entertainment media");
Question q1f = new Question("q1f", "whether I am left- or right-handed");
Question q1g = new Question("q1g", "my greater familiarity with one group or topic than the other");

Question q2a = new Question("q2a", "My IAT score reflects the culture that I am exposed to, but not me, personally.");
Question q2b = new Question("q2b", "Whether I like my IAT score or not, it captures something important about me.");
Question q2c = new Question("q2c", "The IAT reflects something about my automatic thoughts and feelings concerning this topic.");
Question q2d = new Question("q2d", "The IAT does not reflect anything about my thoughts or feelings - unconscious or otherwise.");

SDQuestion q3a = new SDQuestion("q3a", "interesting", "boring");
SDQuestion q3b = new SDQuestion("q3b", "enjoyable", "frustrating");
SDQuestion q3c = new SDQuestion("q3c", "eye-opening", "useless");

Question[] q1Array = {q1a, q1b, q1c, q1d, q1e, q1f, q1g};
Question[] q2Array = {q2a, q2b, q2c, q2d};
SDQuestion[] q3Array = {q3a, q3b, q3c};
	
Collections.shuffle(Arrays.asList(q1Array));
Collections.shuffle(Arrays.asList(q2Array));
Collections.shuffle(Arrays.asList(q3Array));
%>

<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<title>Implicit Association Test</title>
	<script type="text/javascript">

		function CBq1h(frm)
  		{
    		if (!frm.q1h.checked)
      		frm.q1h.focus()
  		}
		function CBq1i(frm)
  		{
    		if (!frm.q1i.checked)
      		frm.q1i.focus()
  		}
	</script>
	<script language="JavaScript" type="text/javascript" src="/implicit/common/en-us/js/task.js"></script>
</head>
	<link rel="stylesheet" href="/implicit/demo/demo.css" type="text/css" />
	<style type="text/css">
		.hi { background-color: #eaf1dc; }
	</style>
</head>

<body>
<form method="post" action="/implicit/Study">
<input type="hidden" name="mode" value="insQuesData" />

<table width="100%" cellpadding="0" cellspacing="0" border="0">

<tr><td align="center">

<table class="core" width="600" cellpadding="10" cellspacing="0" border="0">

<tr>
	<td align="left"><p class="text">Below is the interpretation of your IAT performance, followed by questions about 
	what you think it means. The next page explains the task and has more information such as a summary of what most people show on this IAT.</p></td>

</tr>

    <tr>



        <td><div class="text" align="center"><strong>Your Result</strong></div>
		<div class="hi"><h2><pi:print result="feedback">$result</pi:print></h2></div></td>



    </tr>

<tr>
	<td align="left">
	<p class="text">The interpretation is described as 'automatic association between Male and Science' if you responded faster when <em>Male</em> names and <em>Science</em> words were
classified with the same key than when <em>Male</em> names and <em>Liberal Arts</em> words were
classified with the same key.
	Depending on the magnitude of your result, your automatic association may be described as 'slight', 
	'moderate', 'strong', or 'little to no preference'. Alternatively, you may have received feedback that 
	<a href="JavaScript:void window.open('/implicit/demo/background/fast.html', 'FastResults', 'SCROLLBARS=YES,RESIZABLE=YES,WIDTH=300,HEIGHT=300');">
	'there were too many errors to determine a result'</a>.</p></td>
</tr>

<tr>



	<td><p class="text"><strong>Please take a moment and answer the following questions.</strong></p>
	<p class="text">1. In your opinion, which of these items influenced your score on the IAT? (check all that apply)</p>
	<table>
	<%
		for(int i = 0; i < q1Array.length; i++)
		{
			q1Array[i].setOut(out);
	%>
		<tr>
			<td align="right"><input name="<% q1Array[i].writeName(); %>" type="checkbox" value="yes" /></td>
			<td align="left"><span class="text"><% q1Array[i].writeText(); %></span></td>
		</tr>
	<%
		}
	%>
	<tr>
		<td align="right"><input name="q1h" type="checkbox" value="yes" /></td>
		<td align="left"><span class="text">Other: <input name="q1htext" type="text" onfocus="CBq1h(this.form)" /></span></td>
	</tr>
	<tr>
		<td align="right"><input name="q1i" type="checkbox" value="yes" /></td>
		<td align="left"><span class="text">Other: <input name="q1itext" type="text" onfocus="CBq1i(this.form)" /></span></td>
	</tr>
	</table>
	<p class="text">2. Rate your agreement with each of these interpretations of the IAT.</p>
	<table>
	<%
		for(int i = 0; i < q2Array.length; i++)
		{
			q2Array[i].setOut(out);
	%>
		<tr>
			<td align="left"><span class="text"><% q2Array[i].writeText(); %></span></td>
			<td align="left">
				<select name="<% q2Array[i].writeName(); %>" class="text">
					<option value=".">.</option>
					<option value="2">Strongly agree</option>
					<option value="1">Agree</option>
					<option value="-1">Disagree</option>
					<option value="-2">Strongly disagree</option>
				</select>
			</td>
		</tr>
	<%
		}
	%>
	</table>
	<p class="text">3. I found this experience to be:</p>
	<table>
		<tr>
		<%
			for(int i = 0; i < q3Array.length; i++)
			{
				q3Array[i].setOut(out);
		%>
			<td align="right">
				<select class="text" name="<% q3Array[i].writeName(); %>">
					<option value=".">.</option>
					<option value="6">6 - <% q3Array[i].writeFirst(); %></option>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
					<option value="1">1 - <% q3Array[i].writeSecond(); %></option>
				</select>
			</td>
		<%
			}
		%>
		</tr>
	</table>
	<p class="text">4. What brought you to this website?<br />
		<select name="q4">
			<option value=".">.</option>
			<option value="1">assignment for work</option>
			<option value="2">assignment for school</option>
			<option value="3">assignment for discussion group</option>
			<option value="4">recommendation of teacher</option>
			<option value="5">recommendation of employer</option>
			<option value="6">recommendation of diversity educator</option>
			<option value="7">recommendation of friend</option>
			<option value="8">recommendation of family</option>
			<option value="9">recommendation of acquaintance</option>
			<option value="10">recommendation of colleague</option>
			<option value="11">recommendation from general announcement</option>
			<option value="11b">mention in book</option>
			<option value="11r">mention in research article</option>
			<option value="12">link from blog</option>
			<option value="13">link from media site</option>
			<option value="14">link from education site</option>
			<option value="16">news story from television</option>
			<option value="17">news story from a magazine</option>
			<option value="18">news story from a newspaper</option>
			<option value="19">news story from a website</option>
			<option value="20">news story from another publication</option>
			<option value="21">chat or discussion thread</option>
			<option value="22">advertisement</option>
			<option value="23">public announcement</option>
			<option value="24">planned search for information related to this topic</option>
			<option value="25">planned search for this topic in particular</option>
			<option value="26">just surfing the web</option>
			<option value="27">other</option>			
		</select>

	</td>
</tr>

<tr><td align="center"><script language="JavaScript" type="text/javascript">writeButton("Proceed");</script></td></tr>

	</table>

</td>
</tr>
</table>
</form>
</body>
</html>