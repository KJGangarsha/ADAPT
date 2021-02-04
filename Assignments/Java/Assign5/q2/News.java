package q2;

public class News {
	private int newsId;
    private String postedByUser;
    private String commentByUser;
    private String comment;
    
    public News(int newsId, String userPost, String userComment, String comment)
    {
    	this.newsId=newsId;
    	this.postedByUser=userPost;
    	this.commentByUser=userComment;
    	this.comment=comment;
    }
    
    public int getNewsId() 
    {
    	return newsId;
    }
    
	public String getPostedByUser() 
	{
		return postedByUser;
	}
	
	public String getCommentByUser() 
	{
		return commentByUser;
	}
	
	public String getComment() 
	{
		return comment;
	}
}

