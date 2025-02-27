const errorHandler = (err, req, res, next) => {
    console.error('❌ Error:', err.message || err);
  
    res.status(err.status || 500).json({
      error: err.message || 'Lỗi server nội bộ',
      status: err.status || 500
    });
  };
  
module.exports = errorHandler;
  